import {
    ArrowRight,
    UserRoundPlus,
  } from "lucide-react";
  import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestsModal from "../../components/invite-guests-modal";
import ConfirmTripModal from "../../components/confirm-trip-modal";
import DestinationAndDateStep from "../../components/step/destination-and-date-step";
  
  export function CreateTripPage() {
    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
  
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  
    const openGuestsInput = () => {
      setIsGuestsInputOpen(true);
    };
  
    const closeGuestsInput = () => {
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
  
    const createTrip = (event : FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      navigate('/trips/123')
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
  
          <div className="space-y-4">
            <DestinationAndDateStep isGuestsInputOpen={isGuestsInputOpen} closeGuestsInput={closeGuestsInput} openGuestsInput={openGuestsInput}/>
  
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
          <InviteGuestsModal closeGuestsModal={closeGuestsModal} emailsToInvite={emailsToInvite} removeEmailsFromInvites={removeEmailsFromInvites} addNewEmailToInvite={addNewEmailToInvite} />
        )}
  
        {isConfirmTripModalOpen && (
          <ConfirmTripModal closeConfirmTripModal={closeConfirmTripModal} createTrip={createTrip} />
        )}
      </div>
    );
  }
  