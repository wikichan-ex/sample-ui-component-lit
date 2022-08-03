
 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 @customElement('sample-lit-test')
 export class SampleLitTest extends LitElement {
   static override styles = css`
     :host {
       display: block;
       background-color: greenyellow;
     }
   `;
 
   @property()
   text = 'ABC';
 
   override render() {
     return html`
       <div> Sample Lit Component: ${this.text}</div>
     `;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'sample-lit-test': SampleLitTest;
   }
 }
 