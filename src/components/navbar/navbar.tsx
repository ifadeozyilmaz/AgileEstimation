export interface NavbarProps {
    /** title will be changed in the navbar */
    title: string;
}

export function Navbar(props:NavbarProps) {
    const {title} = props;
    return (
        <nav className="nav">
            <a className="site-name">{title}</a>
        </nav>
    )
}

