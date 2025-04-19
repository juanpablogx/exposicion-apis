import typing
import strawberry

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

@strawberry.type
class Country:
  code: str
  name: str
  capital: str
  
def get_country_by_code(code: str) -> typing.Optional[dict]:
  for country in countries:
    if country['code'] == code:
      return Country(
        code=country['code'],
        name=country['name'],
        capital=country['capital']
      )
  return None

def get_all_countries() -> typing.List[Country]:
  return [
    Country(
      code=country['code'],
      name=country['name'],
      capital=country['capital']
    ) for country in countries
  ]

  
@strawberry.type
class Query:
  @strawberry.field
  def country(self, code: str) -> typing.Optional[Country]:
    return get_country_by_code(code)
  
  @strawberry.field
  def countries(self) -> typing.List[Country]:
    return get_all_countries()