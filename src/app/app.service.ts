import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

solucionaExemplo(){
  return 'Exemplo usando o service!';
}

}
