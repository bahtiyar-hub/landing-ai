export const WHATSAPP_NUMBER = "6285157292962";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Halo, saya tertarik dengan properti di Surabaya. Bisa info lebih lanjut?";
