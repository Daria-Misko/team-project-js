import isMobile from "./isMobile";
import countQntOfPages from "./counterQntPage";

export default function paginationRender (arrayOfRequests) {

    if(isMobile()){
        if(countQntOfPages() <= 3) {
            const buttons = '';
            const markup = `<ul class="pagination-list">${buttons}</ul>`;
            for (let i = 1; i <= arrayOfRequests.length; i +=1) {
                if(i === 1) {
                    buttons + `<li><button type="button" class="buttons isActivePage" id="ref-btn" value="${i}">${i}</button></li>`;
                } else {
                    buttons + `<li><button type="button" class="buttons" id="ref-btn" data-order="${i - 1}"  value="${i}">${i}</button></li>`;
                }
            }
            return markup;
        } else {
            return `<ul class="pagination-list"><li><button type="button" class="prew-btn buttons" id="header-btn-back-js" disabled ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="15 18 9 12 15 6"></polyline></svg>Prew</button></li><li><button type="button" class="first-btn buttons isActivePage" id="ref-btn" data-order="0" value="1">1</button></li><li><p class="ellipsis">...</p></li><li><button type="button" class="buttons" data-changedBtn="1" data-order="1" value="2" id="ref-btn">2</button><li><p class="ellipsis">...</p></li><li><button type="button" class="last-btn buttons" value="${countQntOfPages()}" data-order="2"id="ref-btn">${countQntOfPages()}</button></li><li><button type="button" class="next-btn buttons" id="header-btn-next-js">Next<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li></ul>`;
        }
    }
    else {
        if(countQntOfPages() <= 5) {
            const buttons = '';
            const markup = `<ul class="pagination-list">${buttons}</ul>`;
            for (let i = 1; i <= arrayOfRequests.length; i +=1) {
                if(i === 1) {
                    buttons + `<li><button type="button" class="paginator-btn buttons isActivePage" data-order="0"  value="${i}" id="ref-btn">${i}</button></li>`;
                } else {
                    buttons + `<li><button type="button" class="paginator-btn buttons" data-order="${i - 1}"  value="${i}" id="ref-btn">${i}</button></li>`;
                }
            }
            return markup;
        } else {
            return `<ul class="pagination-list"><li><button type="button" class="prew-btn buttons" id="header-btn-back-js"disabled ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="15 18 9 12 15 6"></polyline></svg>Prew</button></li><li><button type="button" class="first-btn buttons isActivePage" id="ref-btn" data-order="0" value="1" >1</button></li><li><p class="ellipsis">...</p></li><li><button type="button" class="buttons" value="2" id="ref-btn" data-changedBtn="1" data-order="1" >2</button></li><li><button type="button" class="buttons" data-changedBtn="2" value="3" id="ref-btn" data-order="2" >3</button></li><li><button type="button" class="buttons" data-changedBtn="3" value="4" data-order="3" id="ref-btn">4</button></li><li><p class="ellipsis">...</p></li><li><button type="button" class="last-btn buttons" data-order="4" value="${countQntOfPages()}" id="ref-btn">${countQntOfPages()}</button></li><li><button type="button" class="next-btn buttons" id="header-btn-next-js" >Next<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li></ul>`;
        }
    }
}
