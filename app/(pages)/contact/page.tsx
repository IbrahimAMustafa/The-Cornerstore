import MapMarkerIcon from "@/app/components/Icons/MapMarkerIcon"
import PhoneIcon from "@/app/components/Icons/PhoneIcon"

const cardStyling="m-auto bg-card bg-(--light)/50 rounded-2xl shadow-lg w-9/10 md:4/5 lg:w-35/50 pt-5 pb-5"
const iconStyling = "flex justify-center items-center ml-auto my-auto mr-2 h-10 w-10 bg-(--light) rounded-lg"

export default function Page() {
  return (
    <>
      <h3 className='m-auto font-bold text-5xl my-10'>Contact Us</h3>
      <div className="grid grid-flow-row md:grid-cols-2 md:grid-flow-col mb-5 h-[80vh]">
        <div className={`${cardStyling}`}>
          <div className="flex flex-col">
            <h3 className="m-auto text-xl font-bold mb-3">Contact Details</h3>
            <address className="flex flex-col items-start" style={{textDecoration: "none", color: "inherit", fontStyle: "normal"}}>
              <div className="grid grid-cols-[1fr_2fr] w-1/1 m-auto mb-2">
                <div className={`${iconStyling}`}>
                  <PhoneIcon/>
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <a href="tel:2166313320" style={{textDecoration: "none", color: "inherit", fontStyle: "normal"}}>(216)-631-3320</a>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_2fr] w-1/1 m-auto">
                <div className={`${iconStyling}`}>
                  <MapMarkerIcon/>
                </div>
                <div>
                  <p className="font-bold">Address</p>
                  <p>3175 W 84th St <br/> Cleveland, OH 44102</p>
                </div>
              </div>
            </address>
          </div>
        </div>
        <div className={`${cardStyling}`}>
          <div className="flex flex-col">
            <span className="m-auto text-xl font-bold mb-3">Hours Of Operation</span>
            <div className="flex justify-between bg-(--light) w-9/10 px-4 mx-auto my-2 rounded-lg">
              <span>Monday - Saturday</span> <span>9:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between bg-(--light) w-9/10 px-4 mx-auto my-2 rounded-lg">
              <span>Sunday</span><span>9:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
        <div className="md:col-start-2 row-span-4 px-5 w-1/1 h-1/1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.6985540393252!2d-81.74480862426346!3d41.467452971289816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f1d6ef9fe6db%3A0x40c25632d2c20e28!2sThe%20Corner%20Store!5e0!3m2!1sen!2sus!4v1783872771573!5m2!1sen!2sus" 
            width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </>
  )
}