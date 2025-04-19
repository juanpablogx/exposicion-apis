import logging
logging.basicConfig(level=logging.DEBUG)
from spyne import Application, rpc, ServiceBase, Integer, Unicode, AnyDict
from spyne import Iterable
from spyne.protocol.soap import Soap11
from spyne.server.wsgi import WsgiApplication

countries = [
  {'code': 'US', 'name': 'United States', 'capital': 'Washington, D.C.'},
  {'code': 'CA', 'name': 'Canada', 'capital': 'Ottawa'},
  {'code': 'MX', 'name': 'Mexico', 'capital': 'Mexico City'},
  {'code': 'GB', 'name': 'United Kingdom', 'capital': 'London'},
  {'code': 'FR', 'name': 'France', 'capital': 'Paris'},
  {'code': 'DE', 'name': 'Germany', 'capital': 'Berlin'},
  {'code': 'JP', 'name': 'Japan', 'capital': 'Tokyo'},
  {'code': 'CN', 'name': 'China', 'capital': 'Beijing'},
  {'code': 'IN', 'name': 'India', 'capital': 'New Delhi'},
  {'code': 'BR', 'name': 'Brazil', 'capital': 'Brasília'},
  {'code': 'CO', 'name': 'Colombia', 'capital': 'Bogotá'},
  {'code': 'AR', 'name': 'Argentina', 'capital': 'Buenos Aires'},
  {'code': 'AU', 'name': 'Australia', 'capital': 'Canberra'},
  {'code': 'ZA', 'name': 'South Africa', 'capital': 'Pretoria'},
  {'code': 'RU', 'name': 'Russia', 'capital': 'Moscow'},
  {'code': 'IT', 'name': 'Italy', 'capital': 'Rome'},
  {'code': 'ES', 'name': 'Spain', 'capital': 'Madrid'},
  {'code': 'NL', 'name': 'Netherlands', 'capital': 'Amsterdam'},
  {'code': 'SE', 'name': 'Sweden', 'capital': 'Stockholm'},
  {'code': 'NO', 'name': 'Norway', 'capital': 'Oslo'}
]

class CountriesService(ServiceBase):
  @rpc(Unicode, _returns=Unicode)
  def get_country_by_code(ctx, code):
    """
    Retrieves the name and capital of a country given its code.
    @param code: The country code (e.g., 'US', 'CO').
    @return: The name and capital of the country or 'Country not found'.
    """
    for country in countries:
      if country['code'].upper() == code.upper():
        return f"Country: {country['name']}, Capital: {country['capital']}"
    return 'Country not found'
      
application = Application([CountriesService],
  tns='spyne.examples.countries',
  in_protocol=Soap11(validator='lxml'),
  out_protocol=Soap11()
)

if __name__ == '__main__':
  from wsgiref.simple_server import make_server
  
  wsgi_app = WsgiApplication(application)
  server = make_server('127.0.0.1', 8000, wsgi_app)
  server.serve_forever()