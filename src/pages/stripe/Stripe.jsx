import StripeCheckout from 'react-stripe-checkout'
import './stripe.scss'
export default function Stripe() {
    const stripe_Key="pk_test_51JkB96G4aeogyTY8BarC9GXHT8gsGMeaYlVFyvX1kq4lO14pyTa0FEiMp50PELe8C8Fpf40XJB5sfQeqoe5iVtyc00THIuMYoi"
    const onToken=(token)=>{
        console.log(token)
    }
    return (
        <div className="stripe">
         
              <div className="but">
              <StripeCheckout name="BANG Clothing" image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" ComponentClass="div"
  panelLabel="Give Money" token={onToken} amount={2000} stripeKey={stripe_Key} description="total is tjis much" billingAddress shippingAddress triggerEvent="onTouchTap">
                 
                  </StripeCheckout>  
              </div>
             
        </div>
    )
}
