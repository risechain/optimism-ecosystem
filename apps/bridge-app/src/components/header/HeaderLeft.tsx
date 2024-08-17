import { useTheme } from "@/providers/ThemeProvider";
import logoNameDark from '@/assets/rise-name-dark.svg'
import logoNameLight from '@/assets/rise-name.svg'

export type HeaderLeftProps = {
  logo: string
}

export const HeaderLeft = ({ logo }: HeaderLeftProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex logo">
      <img src={logo} />
      {theme == "dark" ?
        <img className="p-4" src={logoNameLight} />
      :<img className="p-4" src={logoNameDark} />}
    </div>
  )
}
