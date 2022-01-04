import React from 'react'
import ReactMarkdown from 'react-markdown'
import Markdown from '../../components/Markdown/Markdown.component'

const riskDisclosure = `Content is for educational purposes only, not investment advice.
Trading, investing, and entrepreneurship involves a high degree of risk.
We’re not investment or trading advisors.
Nothing we say is a recommendation to buy or sell anything.
There are no guarantees or certainties in trading or investing.
Many traders and investors lose money. Don’t trade with money you can’t afford to lose.
Bitcoin and cryptocurrencies are an extremely risky asset.
Before deciding to participate in the cryptocurrency market, you should carefully consider your investment objectives, level of experience and risk appetite. Most importantly, do not invest money you cannot afford to lose. Trading cryptocurrencies, equities, and commodity futures is highly speculative. Most people lose money with trading. There is considerable exposure to risk in any cryptocurrency contract and transaction, including, but not limited to, leverage, creditworthiness, limited regulatory protection and market volatility that may substantially affect the price or liquidity of a currency or currency pair.
The leveraged nature of commodity futures trading means that any market movement will have an equally proportional effect on your deposited funds. This may work against you as well as for you. The possibility exists that you could sustain a total loss of initial margin funds and be required to deposit additional funds to maintain your position. If you fail to meet any margin requirement, your position may be liquidated and you will be responsible for any resulting losses.
Past performance is not necessarily indicative of future results. There are no guarantees of profit nor of avoiding losses when trading cryptocurrencies, equities, or commodity futures contracts. Hypothetical results have many inherent limitations and are not predictive of actual success. No representation is being made that any trade will or is likely to achieve profits similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trader. Testimonials are not indicative of future success and have not been independently verified.
CFTC RULE 4.41 – Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk in actual trading. For example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all of which can adversely affect actual trading results.
The services and content that we provide are solely for educational purposes. The generic market recommendations provided by us are based solely on the judgment of our personnel and should be considered as such. You acknowledge that you enter into any transactions relying on your own judgment. Any market recommendations provided by us are generic only and may or may not be consistent with the market positions or intentions of our firm and/or our affiliates. Any opinions, news, research, analyses, prices, or other information contained on this website are provided as general market commentary, and do not constitute investment advice.
We do not provide any personalized or tailored services or content. As a result, we do not personalize or tailor to a customer’s (or group of customers’) particular circumstances any opinion as to what commodity interests to buy or sell.
There are risks associated with utilizing an Internet-based trading system including, but not limited to, the failure of hardware, software, and Internet connection. We are not responsible for communication failures or delays when trading via the Internet. We are not liable for any loss or damage, including without limitation, any loss of profit, which may arise directly or indirectly from use of or reliance on such information. The content on this website is subject to change at any time without notice.`

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        paddingTop: '100px'
      }}
    >
      <h1 className='ff-good fs-500 mb-2'>Killer Whale Risk Disclosure</h1>

      <Markdown>{riskDisclosure}</Markdown>
    </div>
  )
}
