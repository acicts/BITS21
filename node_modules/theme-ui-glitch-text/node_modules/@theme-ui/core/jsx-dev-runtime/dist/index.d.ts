import { Theme } from '@theme-ui/css';
import * as React from 'react';
import { ThemeUIJSX } from './jsx-namespace';
export type { ThemeUIJSX } from './jsx-namespace';
export type { CSSObject, CSSOthersObject, CSSProperties, CSSPseudoSelectorProps, ColorMode, ColorModesScale, Label, ResponsiveStyleValue, Scale, StylePropertyValue, TLengthStyledSystem, Theme, ThemeDerivedStyles, ThemeStyles, ThemeUICSSObject, ThemeUICSSProperties, ThemeUIExtendedCSSProperties, ThemeUIStyleObject, VariantProperty, } from '@theme-ui/css';
export * from './types';
export declare const jsx: typeof React.createElement;
export declare namespace jsx {
    namespace JSX {
        interface Element extends ThemeUIJSX.Element {
        }
        interface ElementClass extends ThemeUIJSX.ElementClass {
        }
        interface ElementAttributesProperty extends ThemeUIJSX.ElementAttributesProperty {
        }
        interface ElementChildrenAttribute extends ThemeUIJSX.ElementChildrenAttribute {
        }
        type LibraryManagedAttributes<C, P> = ThemeUIJSX.LibraryManagedAttributes<C, P>;
        interface IntrinsicAttributes extends ThemeUIJSX.IntrinsicAttributes {
        }
        interface IntrinsicClassAttributes<T> extends ThemeUIJSX.IntrinsicClassAttributes<T> {
        }
        type IntrinsicElements = ThemeUIJSX.IntrinsicElements;
    }
}
export interface ContextValue {
    __EMOTION_VERSION__: string;
    theme: Theme;
}
export declare const Context: React.Context<ContextValue>;
export declare const useThemeUI: () => ContextValue;
/**
 * Deeply merge themes
 */
export declare const merge: {
    (a: Theme, b: Theme): Theme;
    all: typeof mergeAll;
};
declare function mergeAll<A, B>(a: A, B: B): A & B;
declare function mergeAll<A, B, C>(a: A, B: B, c: C): A & B & C;
declare function mergeAll<A, B, C, D>(a: A, B: B, c: C, d: D): A & B & C & D;
interface BaseProviderProps {
    context: ContextValue;
}
export interface ThemeProviderProps {
    theme: Theme | ((outerTheme: Theme) => Theme);
    children?: React.ReactNode;
}
export declare function ThemeProvider({ theme, children }: ThemeProviderProps): React.FunctionComponentElement<BaseProviderProps>;
