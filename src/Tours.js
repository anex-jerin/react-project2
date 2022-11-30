import Tour from "./Tour";
const Tours = ({tours,removeTour}) => {
console.log(tours)
return (
  <div className="tours">
    <h1>Our tours</h1>
    {tours.map((tour)=>{
      return <Tour key={tour.id} {...tour} removeTour ={removeTour}/>
    })}
  </div>
)
};

export default Tours;
