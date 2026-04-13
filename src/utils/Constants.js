// Utilties and constants used across the app
// Base URL for API calls
export const BASE_URL = ""

// Pruice formater for US dollars
export const US_CURRENCY = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})