import os

rede = [
    {'dispositivo': 'Geladeira', 'ativo': True, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Ar-condicionado', 'ativo': True, 'categoria': 'Climatização'},
    {'dispositivo': 'Smart TV', 'ativo': True, 'categoria': 'Entretenimento'},
    {'dispositivo': 'Lava-louça', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Lava-roupa', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    
    {'dispositivo': 'Cafeteira', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Iluminação direta', 'ativo': False, 'categoria': 'Iluminação'},
    {'dispositivo': 'Iluminação indireta', 'ativo': True, 'categoria': 'Iluminação'},
    {'dispositivo': 'Iluminação comum', 'ativo': False, 'categoria': 'Iluminação'},
    {'dispositivo': 'Sistema de som', 'ativo': True, 'categoria': 'Entretenimento'},

    {'dispositivo': 'Freezer', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Micro-ondas', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Forno elétrico', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Air Fryer', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Secadora de roupas', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Aspirador robô', 'ativo': False, 'categoria': 'Eletrodoméstico'},
    {'dispositivo': 'Purificador de água', 'ativo': False, 'categoria': 'Eletrodoméstico'},

    {'dispositivo': 'Ventilador', 'ativo': False, 'categoria': 'Climatização'},
    {'dispositivo': 'Umidificador', 'ativo': False, 'categoria': 'Climatização'},
    {'dispositivo': 'Purificador de ar', 'ativo': False, 'categoria': 'Climatização'},

    {'dispositivo': 'Fita LED', 'ativo': False, 'categoria': 'Iluminação'},
    {'dispositivo': 'Lâmpada inteligente', 'ativo': False, 'categoria': 'Iluminação'},
    {'dispositivo': 'Spots', 'ativo': False, 'categoria': 'Iluminação'},
    {'dispositivo': 'Luz externa', 'ativo': False, 'categoria': 'Iluminação'},
    {'dispositivo': 'Luz de jardim', 'ativo': False, 'categoria': 'Iluminação'},

    {'dispositivo': 'Soundbar', 'ativo': False, 'categoria': 'Entretenimento'},
    {'dispositivo': 'Videogame', 'ativo': False, 'categoria': 'Entretenimento'},
    {'dispositivo': 'Projetor', 'ativo': False, 'categoria': 'Entretenimento'},
    {'dispositivo': 'Home Theater', 'ativo': False, 'categoria': 'Entretenimento'},

    {'dispositivo': 'Câmera de segurança', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Campainha inteligente', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Fechadura inteligente', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Sensor de movimento', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Sensor de presença', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Sensor de abertura', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Alarme', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Sensor de fumaça', 'ativo': False, 'categoria': 'Segurança'},
    {'dispositivo': 'Sensor de vazamento', 'ativo': False, 'categoria': 'Segurança'},

    {'dispositivo': 'Irrigação automática', 'ativo': False, 'categoria': 'Área externa'},
    {'dispositivo': 'Bomba da piscina', 'ativo': False, 'categoria': 'Área externa'},
    {'dispositivo': 'Iluminação da piscina', 'ativo': False, 'categoria': 'Área externa'},
    {'dispositivo': 'Iluminação do jardim', 'ativo': False, 'categoria': 'Área externa'},
    {'dispositivo': 'Portão eletrônico', 'ativo': False, 'categoria': 'Área externa'},

    {'dispositivo': 'Painel solar', 'ativo': False, 'categoria': 'Energia'},
    {'dispositivo': 'Inversor solar', 'ativo': False, 'categoria': 'Energia'},
    {'dispositivo': 'Bateria residencial', 'ativo': False, 'categoria': 'Energia'},
    {'dispositivo': 'Carregador de carro elétrico', 'ativo': False, 'categoria': 'Energia'},
    {'dispositivo': 'Medidor inteligente', 'ativo': False, 'categoria': 'Energia'},

    {'dispositivo': 'Hub de automação', 'ativo': False, 'categoria': 'Automação'},
    {'dispositivo': 'Assistente de voz', 'ativo': False, 'categoria': 'Automação'},
    {'dispositivo': 'Roteador', 'ativo': True, 'categoria': 'Automação'},
    {'dispositivo': 'Smart Plug', 'ativo': False, 'categoria': 'Automação'},
    {'dispositivo': 'Smart Switch', 'ativo': False, 'categoria': 'Automação'},
]

categorias = {
    1: 'Eletrodoméstico',
    2: 'Climatização',
    3: 'Automação',
    4: 'Energia',
    5: 'Área externa',
    6: 'Segurança',
    7: 'Entretenimento',
    8: 'Iluminação',
}

def titulo(nome):
    os.system('cls')
    print(nome)

def listar_opcoes():
    for id, options in opcoes.items():
        print(f"{id}. {options}")

def adicionar_dispositivo():
    os.system('cls')
    nome = input('Digite o nome do dispositivo: ')
        
    for numero, categoria in categorias.items():
            print(f"{numero}. {categoria}")

    while True:
        try:
            
            opcao = int(input('Digite a categoria do dispositivo: '))

            if opcao in categorias:
                categoria = categorias[opcao]
                break

            else:
                print('Opção inválida.')

        except: 
            print('Digite apenas numeros.')

    while True:
        alternativa = input('O dispositivo está ativo? (s/n): ')
        ativo = False

        if alternativa.lower() == "s":
            ativo = True
            break
        elif alternativa.lower() == "n":
            ativo = False
            break
        else:
            print('Valor invalido')

    novo_dispositivo = {
        'dispositivo': nome,
        'ativo': ativo,
        'categoria': categoria
    }

    rede.append(novo_dispositivo)
    os.system('cls')
    print(novo_dispositivo)

def listar_dispositivos():
    os.system('cls')
    for dispositivo in rede:
        print(f"Dispositivo: {dispositivo['dispositivo']}")
        print(f"Categoria: {dispositivo['categoria']}")
        print(f"Ativo: {dispositivo['ativo']}")
        print(f"---" * 30)

def buscar_dispositivo():
    busca = input('Digite o nome do dispositivo: ').lower()
    encontrado = False
    for dispositivo in rede:
        if busca in dispositivo['dispositivo'].lower():
            print('\nDispositivo encontrado!\n')
            print(f"\nDispositivo: {dispositivo['dispositivo']}")
            print(f"Ativo: {dispositivo['ativo']}")
            print(f"Categoria: {dispositivo['categoria']}\n")

            encontrado = True

    if not encontrado:
        print('Dispositivo não encontrado!')

def ativar_dispositivo():
    print('Ativar dispositivo')

def escolher_opcao():
    while True:
        try:
            listar_opcoes()
            opcao = int(input('Escolha uma opção: '))
            if opcao == 1:
                adicionar_dispositivo()
            elif opcao == 2:
                buscar_dispositivo()
            elif opcao == 3:
                listar_dispositivos()
            elif opcao == 4:
                ativar_dispositivo()
            elif opcao == 5:
                finalizar_app()
                break

        except:
            print('Opção Inválida')

def finalizar_app():
    print('Finalizando app...')

opcoes = {
    1: ('Adicionar dispositivo', adicionar_dispositivo),
    2: ('Buscar dispositivo', buscar_dispositivo),
    3: ('Listar dispositivos', listar_dispositivos),
    4: ('Ligar dispositivo', ativar_dispositivo),
}

def inicializa_app():
    print(f"==" * 2)
    print("MENU")
    print(f"==" * 2)

    while True:
        for numero, (nome, funcao) in opcoes.items():
            print(f"{numero}. {nome}")

        indice_saida = int(len(opcoes) + 1)
        print(f"{indice_saida}. Sair")

        try:
            opcao = int(input('Escolha uma opção: '))

            if opcao in opcoes:
                opcoes[opcao][1]()
            elif opcao == indice_saida:
                finalizar_app()
                break                
            else:
                print('Opção inválida!')
                
        except:
            print('Digite apenas números!')


def main():
    titulo('Home System')
    inicializa_app()

if __name__ == '__main__':
    main()