const GoogleTagManagerBody = () => {
  const gtmId = 'GTM-N7RPGWCC';

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
};

export default GoogleTagManagerBody; 