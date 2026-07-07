import MapElement from "../components/MapComponents/googleMap";

export default function Page() {
  return (
    <>
    <h3 className='text-(--medium) font-bold text-xl'>Contact Us</h3>
      <div className="grid">
        <div className="flex flex-col m-auto justify-center items-center bg-card bg-(--light)/50 rounded-2xl shadow-lg w-1/2 h-45 pt-5 pb-5">
          <div>
              <h3>Contact Details</h3>
              <address style={{textDecoration: "none", color: "inherit", fontStyle: "normal"}}>
                <p className="font-bold">Phone</p>
                <a href="tel:2166313320" style={{textDecoration: "none", color: "inherit", fontStyle: "normal"}}>(216)-631-3320</a>
                <p className="font-bold">Address</p>
                <p>3175 W 84th St <br/> Cleveland, OH 44102</p>
              </address>
          </div>
        </div>
        <div className="flex flex-col m-auto justify-center items-center bg-card bg-(--light)/50 rounded-2xl shadow-lg w-1/2 h-1/2 pt-5 pb-5 row-start-2">Hours Of Operation</div>
        <div className="col-start-2 row-span-full m-auto w-1/1 h-1/1">
          <MapElement />
        </div>
      </div>
    </>
  )
}