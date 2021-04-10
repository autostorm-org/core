/**
 * Static theme type, represent a css theme with theme attibutest to remain constant
 * during the app lifecycle.
 *  */
type StaticTheme = { name: string };

/**
 * Dynamic theme type, represent a css theme with theme attibutest that can be
 * changed dynamically during application lifecycle.
 *  */
type DynamicTheme = { name: string; values: { [key: string]: string } };

export { StaticTheme, DynamicTheme };
