import "./Cart.css"

const Cart = ({selectedActors,remaining,totalCost}) => {
    
    return (
        <div>
            <h3>Total Actors: {selectedActors.length}</h3>
            <h5>Remaining : {remaining}$</h5>
            <h5>TotalCost: {totalCost}$</h5>
          {
            selectedActors.map(selectedActor =>
                <div key={selectedActor.id}>
                    <li>Name:{selectedActor.name} || salary:{selectedActor.salary}</li>
                   

                </div>
            )
          }
        </div>
    );
};

export default Cart;