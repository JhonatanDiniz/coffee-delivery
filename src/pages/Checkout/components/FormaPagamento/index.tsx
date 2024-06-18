import { CreditCard } from "@phosphor-icons/react"
import { FormaPagamento } from "./style"
import { ButtonHTMLAttributes } from "react"
import { PaymentMethodProps } from "../.."

interface PaymentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    payment: PaymentMethodProps
    onSelect: (payment: any)=> void
}

export function Pagamento({payment, onSelect, ...props}: PaymentProps){
  return(
    <div>
      <FormaPagamento onClick={()=> onSelect(payment)} {...props} type="button"><CreditCard size={22} color="#8047F8"/>{payment.description}</FormaPagamento>
    </div>
  )
}