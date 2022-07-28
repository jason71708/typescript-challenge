/**
 * https://aka.ms/typescript/4
 */

type IconSize = "sm" | "md" | "lg";

type LooseAutocomplete<T> = any;

export const iconSize: LooseAutocomplete<IconSize> = "sm";

// In order to keep autocomplete but allow other string values.
