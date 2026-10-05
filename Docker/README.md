PID (Process Identifier Namespace): isolamento de processos que estão em execução dentro do container.
NET (Network Namespace): isolamento dos recursos de rede, como interfaces de rede, endereços IP e tabelas de roteamento.
IPC (Inter-Process Communication Namespace): isolamento dos mecanismos de comunicação entre processos, como filas de mensagens e memória compartilhada.
MNT (Mount Namespace): isolamento do sistema de arquivos e pontos de montagem, garantindo que alterações no sistema de arquivos dentro de um container não afetem o sistema de arquivos fora dele.
UTS (Unix Timesharing System Namespace): isolamento do kernel, permitindo que o container atue como se fosse outro host.