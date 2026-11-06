// Microsoft Advertising UET tag for tercetlaw.com, injected into every HTML page at the edge.
// UET tag 97281540 (Tercet Law, PLLC Microsoft Ads account).
const SNIPPET = `<!-- Microsoft UET -->
<script>(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"97281540",enableAutoSpaTracking:true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
window.addEventListener('message',function(e){if(e.data&&e.data.event==='calendly.event_scheduled'&&!window.__tlSched){window.__tlSched=1;window.uetq=window.uetq||[];window.uetq.push('event','book_appointment',{});}});
</script>`;

export async function onRequest(context) {
  const res = await context.next();
  const type = res.headers.get('content-type') || '';
  if (!type.includes('text/html')) return res;
  return new HTMLRewriter()
    .on('head', { element(el) { el.append(SNIPPET, { html: true }); } })
    .transform(res);
}
