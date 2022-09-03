import * as React from "react";
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import { LinkProps } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    textDecoration: match ? "underline" : "none",
                    textDecorationThickness: match ? '3px' : '0',
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " "}
        </div>
    );
}
export default CustomLink;