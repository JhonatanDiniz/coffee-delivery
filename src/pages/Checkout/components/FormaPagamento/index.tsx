import { CreditCard } from "@phosphor-icons/react"
import { FormaPagamento } from "./style"
import { ButtonHTMLAttributes } from "react"
import { PaymentMethodProps } from "../../../../context/ProductsContext"

interface PaymentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    payment: PaymentMethodProps
    isSelected?: boolean
    onSelect: (payment: any)=> void
}

export function Pagamento({payment, onSelect, isSelected = false, ...props}: PaymentProps){
  return(
    <div>
      <FormaPagamento $isSelected={isSelected} onClick={()=> onSelect(payment)} {...props} type="button"><CreditCard size={22} color="#8047F8"/>{payment.description}</FormaPagamento>
    </div>
  )
}