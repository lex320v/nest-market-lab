import { IsNotEmpty } from 'class-validator';

export class CreateLinkDto {
  @IsNotEmpty()
  info: string;
}
