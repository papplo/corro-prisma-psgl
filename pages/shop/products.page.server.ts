import fetch from "node-fetch";
import { PageContext } from "../../renderer/types";

export async function onBeforeRender(pageContext: PageContext) {

    const { productId } = pageContext.routeParams;
    let productDetail;
    try {
        const response = await fetch(`http://localhost:3000/api/products/${productId}`);
        const productById = await response.json();

        productDetail = { ...productById.data}
    } catch (error) {
        throw new Error('error');
        productDetail = null;
    }

    const pageProps = { productDetail }

    return {
        pageContext: {
            pageProps
        }
    }
}

export const passToClient = ["pageProps"]