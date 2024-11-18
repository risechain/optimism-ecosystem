import { useTheme } from "@/providers/ThemeProvider";
import logoNameDark from '@/assets/rise-name-dark.svg'
import logoNameLight from '@/assets/rise-name.svg'

export type HeaderLeftProps = {
  logo: string
}

export const HeaderLeft = ({ logo }: HeaderLeftProps) => {
  const { theme } = useTheme();
  const homeUrl = "https://riselabs.xyz";

  return (
    <div className="flex logo">
      {/* <a href={homeUrl}>
        <img src={logo} />
      </a> */}
      {theme == "dark" ?
      <a href={homeUrl}>
        <img className="p-4 logo-img" src={logoNameLight} />
      </a>
      :<a href={homeUrl}><img className="p-4 logo-img" src={logoNameDark} /></a>}
    </div>
  )
}
