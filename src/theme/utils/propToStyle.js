import { breakpointsMedia } from "./breakpointsMedia";
import { css } from "styled-components";

export function propToStyle(propName, props) {
    return function(props) {
        const propValue = props[propName];
        if(typeof propValue === 'string' || typeof propValue === 'number'){
            return {
                // textAlign: props[textAlign]
                [propName]: propValue
            }
        }
        if(typeof propValue === 'object') {
            return breakpointsMedia({
                xs: {
                    [propName]: propValue.xs
                },
                sm: {
                    [propName]: propValue.sm
                },
                md: {
                    [propName]: propValue.md
                },
                lg: {
                    [propName]: propValue.lg
                },
                xl: {
                    [propName]: propValue.xl
                },
            })
        }
    }
}