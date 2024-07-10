import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
  User,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const openGuestsInput = () => {
    setIsGuestsInputOpen(true);
  };

  const closeGuestesInput = () => {
    setIsGuestsInputOpen(false);
  };

  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
  };

  const closeGuestsModal = () => {
    setIsGuestsModalOpen(false);
  };

  const openConfirmTripModal = () => {
    setIsConfirmTripModalOpen(true);
  }

  const closeConfirmTripModal = () => {
    setIsConfirmTripModalOpen(false);
  }


  const addNewEmailToInvite = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email) return alert('Preencha um e-mail.');
    
    if(emailsToInvite.includes(email)) return alert('E-mail já cadastrado.');

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset();
  }

  const removeEmailsFromInvites = (emailToRemove: string) => {
    const newEmailList = emailsToInvite.filter((email) => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-pattern">
      <div className="w-full max-w-3xl px-6 space-y-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="logo plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
            <div className="flex items-center flex-1 gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai?"
                className="w-full text-lg bg-transparent outline-none placeholder:text-zinc-400"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="w-40 text-lg bg-transparent outline-none placeholder:text-zinc-400"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-zinc-200 bg-zinc-800 hover:bg-zinc-700"
                onClick={closeGuestesInput}
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
                onClick={openGuestsInput}
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex items-center w-full h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
              <button
                className="flex items-center flex-1 gap-2"
                onClick={openGuestsModal}
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {
                  emailsToInvite.length === 1 ? (
                    <span className="w-full text-lg text-left bg-transparent outline-none text-zinc-400">
                      {emailsToInvite.length} pessoa convidada.
                    </span>
                  ) :
                  emailsToInvite.length > 1 ? (
                    <span className="w-full text-lg text-left bg-transparent outline-none text-zinc-400">
                      {emailsToInvite.length} pessoas convidadas.
                  </span>
                  ) :
                  (
                    <span className="w-full text-lg text-left bg-transparent outline-none text-zinc-400">
                      Quem estará na viagem?
                    </span>
                  )
                }
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
                onClick={openConfirmTripModal}
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-center text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="underline text-zinc-300" href="/">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="underline text-zinc-300" href="/">
            políticas de privacidade
          </a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

            {/* text */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação na viagem.
              </p>
            </div>

            {/* emails */}
            {
              emailsToInvite.length !== 0 ? (
              <div className="flex flex-wrap gap-2">
                {emailsToInvite.map((email) => (
                  <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                  <span className="text-zinc-300">{email}</span> 
                  <button type="button" onClick={() => removeEmailsFromInvites(email)}>
                    <X className="size-4 text-zinc-400"/>
                  </button>
                </div>
              ))}
            </div> ) : 
            <h1 className="text-sm text-zinc-400">Cadastre um e-mail.</h1>
            }
            

            <div className="w-full h-px bg-zinc-800"/>

            {/* email input */}
            <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <AtSign className="text-zinc-400 size-5"/>
              <input
                type="email"
                name="email"
                placeholder="Digite o e-mail do convidado"
                className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
              />

              <button
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
                type="submit"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>

          </div>
        </div>
      )}

      {isConfirmTripModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

          {/* text */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
              <button onClick={closeConfirmTripModal}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de agosto de 2024</span> preencha seus dados abaixo:
            </p>
          </div>

          {/* email input */}
          <form onSubmit={addNewEmailToInvite} className="space-y-3">
            <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
              <User className="text-zinc-400 size-5"/>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
              />
            </div>

            <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
              <AtSign className="text-zinc-400 size-5"/>
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
                className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
              />
            </div>

            <button
              className="flex items-center justify-center w-full gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
              type="submit"
            >
              Confirmar criação da viagem
            </button>
          </form>          
        </div>
      </div>
      )}
      
    </div>
  );
}
