export default function Post () {
    return(
        <div className="post">
          <div className="image">
            <img src="https://assets-global.website-files.com/614716f50b4f49202fdd0087/6229b0f7cf6b6325a4f9ac6d_shopify-review-shopify-ecommerce-platform%20(1).jpg" alt="" />
          </div>
          <div className="texts">
            <h2>Shopify shares plunge 18% on weak guidance</h2>
            <p className="info">
              <a className='author' href="">John Doe</a>
              <time dateTime="2024-05-08 21:45">2024-05-08 21:45</time>
            </p>
            <p className='summary'>
              Shopify shares tumbled 18% on Wednesday, shaving almost $20 billion off the company’s value, after the company gave revenue and profit guidance for the current quarter that spooked investors.
            </p>
          </div>
        </div>
    )
}