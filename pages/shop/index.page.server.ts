import fetch from "node-fetch";
import { PageContext } from "../../renderer/types";

export async function onBeforeRender(pageContext: PageContext) {
    try {
        const response = await fetch(`http://localhost:3000/api/products`);
        const product = await response.json();
        const pageProps = { products: product.data }

        return {
            pageContext: {
                pageProps
            }
        }
    } catch (error) {
        throw new Error('error');
    }


}

export const passToClient = ["pageProps"]