import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu"
import { cn } from '../../lib/utils'

export function BandOption({ setMenu, menu, bands }) {

  const goToBandPage = (band) => {
    setMenu("Banda")
    console.log(band)
  }

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
          {bands?.map((band) => (
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