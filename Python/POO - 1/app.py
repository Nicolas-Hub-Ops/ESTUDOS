from models.dispositivo import Dispositivo


smartSensor = Dispositivo('Smart Sensor', 'Automação')
arCondicionado = Dispositivo('Ar-condicionado', 'Climatização')
sistemaSom = Dispositivo('Sistema de Som', 'Entretenimento')
smartTv = Dispositivo('Smart Tv', 'Entretenimento')
umidificador = Dispositivo('Umidificador', 'Climatização')
lavaLouca = Dispositivo('Lava-Louça', 'Eletrodoméstico')

smartSensor.consumo_energia(25)
smartSensor.consumo_energia(55)

arCondicionado.consumo_energia(780)
arCondicionado.consumo_energia(920)
arCondicionado.consumo_energia(670)

smartSensor.alternar_status()
smartTv.alternar_status()

def main():
    Dispositivo.listar_dispositivos()

if __name__ == '__main__':
    main()