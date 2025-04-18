import { ApiProperty } from "@nestjs/swagger";

export class ExampleResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}