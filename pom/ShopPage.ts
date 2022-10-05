import { by, element, ElementArrayFinder, ElementFinder } from "protractor";
import Page from "../common/Page";

class ShopPage extends Page {
    private products: ElementArrayFinder;
    private checkoutLink: ElementFinder;

    constructor() {
        super();
        this.products = element.all(by.css("div.card"));
        this.checkoutLink = element(by.partialLinkText("Checkout"));
    }

    private getProducts() {
        return this.products.getWebElements();
    }

    public getCheckoutLink() {
        return this.checkoutLink;
    }

    public getItemsInCartCount() {
        return this.checkoutLink.getText();
    }

    public addProductsToCart(products: Array<string>) {
        return this.products.each(async (item?: ElementFinder) => {
            const productName: string | undefined = await item
                ?.element(by.css("h4.card-title a"))
                .getText();
            if (products.includes(productName || "")) {
                item?.element(by.tagName("button")).click();
            }
        });
    }
}

module.exports = new ShopPage();