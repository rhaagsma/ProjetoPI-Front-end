import { Link } from 'react-router-dom'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"

export function BandOption({ setMenu, menu, bands = [] }) {

  const goToBandPage = (band) => {
    setMenu("Banda")
    console.log(band)
  }

  const validBands = Array.isArray(bands) ? bands : []

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Bandas</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
          <li className="col-span-2">
            <div
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            >
              {/* <Icons.logo className="h-6 w-6" /> */}
              <div className="mb-2 mt-4 text-lg font-medium">
                Bandas
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                Busque por bandas, veja informações dos produtos.
              </p>
            </div>
          </li>
          {validBands.map((band) => (
            <li key={band.id}>
              <div onClick={() => goToBandPage(band.name)} className='flex w-full'>
                <Link 
                  className='cursor-pointer w-full p-4 bg-gradient-to-b from-muted/50 to-muted hover:opacity-80 transition-all duration-300' 
                  to={`/banda/${band.id}`}
                >
                  {band.name}
                </Link>
              </div>
            </li>
          ))}

        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    // <li onClick={()=>{setMenu("Banda")}}><Link className= "text-white font-semibold"style={{ textDecoration: "none"}} to="/Banda">Banda</Link>{menu==="Banda"?<hr/>:<></>}</li>
  )
}