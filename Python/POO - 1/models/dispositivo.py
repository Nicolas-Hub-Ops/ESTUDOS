from models.watts import Consumo

class Dispositivo:

    rede = [
        
    ]

    def __init__(self, dispositivo, categoria):
        self._dispositivo = dispositivo.title()
        self._categoria = categoria.upper()
        self._ativo = False
        self._consumo = []
        Dispositivo.rede.append(self)

    @classmethod
    def listar_dispositivos(cls):
        print(f"\n")
        print(f"{'Dispositivo'.ljust(20)} | {'Categoria'.ljust(20)} | {'Consumo'.ljust(20)} | {'ON/OFF'}")
        print(f"-" * 80)
        for dispostivo in cls.rede:
            print(f"{dispostivo._dispositivo.ljust(20)} | {dispostivo._categoria.ljust(20)} | {dispostivo.media_energia.ljust(20)} | {dispostivo.ativo}")
        print(f"-" * 80)

        
    
    @property
    def ativo(self):
        return 'ON' if self._ativo else 'OFF'

    def alternar_status(self):
        self._ativo = not self._ativo

    def consumo_energia(self, watts):
        energia = Consumo(watts)
        self._consumo.append(energia)

    @property
    def media_energia(self):
        if not self._consumo:
            return '-'
        soma = sum(consumo._watts for consumo in self._consumo)
        quantidade = len(self._consumo)
        media = round(soma / quantidade, 1)
        return str(media)
