const distanceBetweenCities = (origin, destination) => {
  let resultado;
  switch (true) {
    case (origin === 'Bogotá' && destination === 'Medellín') || (origin === 'Medellín' && destination === 'Bogotá'): resultado = 420; break;
    case (origin === 'Bogotá' && destination === 'Cali') || (origin === 'Cali' && destination === 'Bogotá'): resultado = 486; break;
    case (origin === 'Bogotá' && destination === 'Barranquilla') || (origin === 'Barranquilla' && destination === 'Bogotá'): resultado = 1100; break;
    case (origin === 'Bogotá' && destination === 'Cartagena') || (origin === 'Cartagena' && destination === 'Bogotá'): resultado = 1050; break;
    case (origin === 'Bogotá' && destination === 'Bucaramanga') || (origin === 'Bucaramanga' && destination === 'Bogotá'): resultado = 323; break;
    case (origin === 'Bogotá' && destination === 'Santa Marta') || (origin === 'Santa Marta' && destination === 'Bogotá'): resultado = 925; break;
    case (origin === 'Bogotá' && destination === 'Pereira') || (origin === 'Pereira' && destination === 'Bogotá'): resultado = 360; break;
    case (origin === 'Bogotá' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Bogotá'): resultado = 290; break;
    case (origin === 'Bogotá' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Bogotá'): resultado = 570; break;
    case (origin === 'Medellín' && destination === 'Cali') || (origin === 'Cali' && destination === 'Medellín'): resultado = 460; break;
    case (origin === 'Medellín' && destination === 'Barranquilla') || (origin === 'Barranquilla' && destination === 'Medellín'): resultado = 790; break;
    case (origin === 'Medellín' && destination === 'Cartagena') || (origin === 'Cartagena' && destination === 'Medellín'): resultado = 660; break;
    case (origin === 'Medellín' && destination === 'Bucaramanga') || (origin === 'Bucaramanga' && destination === 'Medellín'): resultado = 260; break;
    case (origin === 'Medellín' && destination === 'Santa Marta') || (origin === 'Santa Marta' && destination === 'Medellín'): resultado = 830; break;
    case (origin === 'Medellín' && destination === 'Pereira') || (origin === 'Pereira' && destination === 'Medellín'): resultado = 340; break;
    case (origin === 'Medellín' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Medellín'): resultado = 290; break;
    case (origin === 'Medellín' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Medellín'): resultado = 470; break;
    case (origin === 'Cali' && destination === 'Barranquilla') || (origin === 'Barranquilla' && destination === 'Cali'): resultado = 940; break;
    case (origin === 'Cali' && destination === 'Cartagena') || (origin === 'Cartagena' && destination === 'Cali'): resultado = 880; break;
    case (origin === 'Cali' && destination === 'Bucaramanga') || (origin === 'Bucaramanga' && destination === 'Cali'): resultado = 510; break;
    case (origin === 'Cali' && destination === 'Santa Marta') || (origin === 'Santa Marta' && destination === 'Cali'): resultado = 1000; break;
    case (origin === 'Cali' && destination === 'Pereira') || (origin === 'Pereira' && destination === 'Cali'): resultado = 280; break;
    case (origin === 'Cali' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Cali'): resultado = 320; break;
    case (origin === 'Cali' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Cali'): resultado = 730; break;
    case (origin === 'Barranquilla' && destination === 'Cartagena') || (origin === 'Cartagena' && destination === 'Barranquilla'): resultado = 130; break;
    case (origin === 'Barranquilla' && destination === 'Bucaramanga') || (origin === 'Bucaramanga' && destination === 'Barranquilla'): resultado = 700; break;
    case (origin === 'Barranquilla' && destination === 'Santa Marta') || (origin === 'Santa Marta' && destination === 'Barranquilla'): resultado = 160; break;
    case (origin === 'Barranquilla' && destination === 'Pereira') || (origin === 'Pereira' && destination === 'Barranquilla'): resultado = 960; break;
    case (origin === 'Barranquilla' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Barranquilla'): resultado = 900; break;
    case (origin === 'Barranquilla' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Barranquilla'): resultado = 470; break;
    case (origin === 'Cartagena' && destination === 'Bucaramanga') || (origin === 'Bucaramanga' && destination === 'Cartagena'): resultado = 760; break;
    case (origin === 'Cartagena' && destination === 'Santa Marta') || (origin === 'Santa Marta' && destination === 'Cartagena'): resultado = 230; break;
    case (origin === 'Cartagena' && destination === 'Pereira') || (origin === 'Pereira' && destination === 'Cartagena'): resultado = 870; break;
    case (origin === 'Cartagena' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Cartagena'): resultado = 810; break;
    case (origin === 'Cartagena' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Cartagena'): resultado = 540; break;
    case (origin === 'Bucaramanga' && destination === 'Santa Marta') || (origin === 'Santa Marta' && destination === 'Bucaramanga'): resultado = 610; break;
    case (origin === 'Bucaramanga' && destination === 'Pereira') || (origin === 'Pereira' && destination === 'Bucaramanga'): resultado = 370; break;
    case (origin === 'Bucaramanga' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Bucaramanga'): resultado = 310; break;
    case (origin === 'Bucaramanga' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Bucaramanga'): resultado = 170; break;
    case (origin === 'Santa Marta' && destination === 'Pereira') || (origin === 'Pereira' && destination === 'Santa Marta'): resultado = 870; break;
    case (origin === 'Santa Marta' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Santa Marta'): resultado = 810; break;
    case (origin === 'Santa Marta' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Santa Marta'): resultado = 570; break;
    case (origin === 'Pereira' && destination === 'Manizales') || (origin === 'Manizales' && destination === 'Pereira'): resultado = 90; break;
    case (origin === 'Pereira' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Pereira'): resultado = 460; break;
    case (origin === 'Manizales' && destination === 'Cúcuta') || (origin === 'Cúcuta' && destination === 'Manizales'): resultado = 370; break;
    default:
      resultado = '';
  }
  return resultado;
};

export default distanceBetweenCities;
