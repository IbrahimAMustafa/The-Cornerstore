import MapElement from "../components/MapComponents/googleMap";
const cardStyling="m-auto bg-card bg-(--light)/50 rounded-2xl shadow-lg w-3/5 pt-5 pb-5"
export default function Page() {
  return (
    <>
    <h3 className='text-(--medium) font-bold text-xl'>Co ntact Us</h3>
      <div className="grid grid-flow-row md:grid-cols-2 md:grid-flow-col mb-5 h-[80vh]">
        <div className={`${cardStyling}`}>
          <div className="flex flex-col">
            <h3 className="font-bold m-auto">Contact Details</h3>
            <address className="flex flex-col items-start" style={{textDecoration: "none", color: "inherit", fontStyle: "normal"}}>
              <p className="font-bold">Phone</p>
              <a href="tel:2166313320" style={{textDecoration: "none", color: "inherit", fontStyle: "normal"}}>(216)-631-3320</a>
              <p className="font-bold">Address</p>
              <p>3175 W 84th St <br/> Cleveland, OH 44102</p>
            </address>
          </div>
        </div>
        <div className={`${cardStyling}`}>
          <div className="flex flex-col">
            <span className="m-auto font-bold">Hours Of Operation</span>
            <div className="flex justify-between">
              <span>Monday - Saturday</span> <span>9:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span><span>9:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
        <div className="md:col-start-2 row-span-4 px-5 w-1/1 h-1/1">
          <div className="w-1/1 h-1/1">
            <MapElement />
          </div>
        </div>
      </div>
    </>
  )
}