import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Link from "next/link"

const ListLink = ({ icon, text, link }: ListLinkProps) => {
  return (
    <Link href={link} data-testid="menuElements">
      <List>
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText children={text}/>
          
          </ListItemButton>
        </ListItem>
      </List>
    </Link>
  )
}

export default ListLink