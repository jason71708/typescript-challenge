type IconSize = "sm" | "md" | "lg";

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

export const iconSize: LooseAutocomplete<IconSize> = 'sm';
export const iconSize2: LooseAutocomplete<IconSize> = 'xs';

// In order to keep autocomplete but allow other string values.
