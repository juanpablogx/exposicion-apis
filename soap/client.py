from lxml import etree
import zeep
from zeep.exceptions import Fault, TransportError
from zeep.plugins import HistoryPlugin

import lxml

wsdl_url = 'http://localhost:8000/?wsdl'

history = HistoryPlugin()

try:
  
  client = zeep.Client(wsdl=wsdl_url, plugins=[history])
  print('Client created successfully.')

  try:
    
    response = client.service.get_country_by_code(code='CO')
    print('Response:')
    print(response)
    print('')
    
    print('Request and response history:')
    for hist in [history.last_sent, history.last_received]:
      print(etree.tostring(hist['envelope'], encoding='unicode', pretty_print=True))
      

    print('\nAvailable services and methods:')
    for service in client.wsdl.services.values():
      print(f'Service: {service.name}')
      for port in service.ports.values():
        print(f'  Port: {port.name}')
        for method in port.binding._operations.values():
          print(f'    Method: {method.name}')
          print(f'      Input: {method.input.signature()}')
          print(f'      Output: {method.output.signature()}')


  except Fault as f:
    print(f'SOAP Fault: {f.message} (Code: {f.code})')
  except AttributeError as e:
    print(f'Error: Method or service not found. Check the WSDL definition. {e}')
    print('Ensure the method name and parameters match the service definition.')
  except Exception as e:
    print(f'An error occurred during the service call: {e}')

except TransportError as e:
  print(f'Transport Error: Could not connect to the server at {wsdl_url}. {e}')
  print('Ensure the SOAP server is running and accessible.')
except Exception as e:
  print(f'An unexpected error occurred: {e}')
