import { Switch, Route } from 'react-router-dom'
import {ProductsList} from './pages/SavedCloths'

<Route
  path="/"
  exact
  render={(props) => {
    return (
      <>
        <Hero
          merchant={merchant}
        />
        { this.renderCartNav() }
        {isCartVisible &&
          <Cart
            {...props}
            cart={cart}
            onUpdateCartQty={this.handleUpdateCartQty}
            onRemoveFromCart={this.handleRemoveFromCart}
            onEmptyCart={this.handleEmptyCart}
          />
        }  
        <ProductsList
          {...props}
          products={products}
          onAddToCart={this.handleAddToCart}
        />
      </>
    );
  }}
/>
