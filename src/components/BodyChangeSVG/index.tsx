import "./styles.css";

interface BodyChangeSVGProps {
  manColor?: string;
  shadowMan?: string;
  shadowManSecond?: string;
}

export const BodyChangeSVG = ({
  manColor = "#a8e063",
  shadowMan = "rgba(168,224,99,.35)",
  shadowManSecond = "rgba(168,224,99,0)",
}: BodyChangeSVGProps) => {
  return (
    <svg
      id="silhouette"
      className="gender-mode__man"
      data-e2e="estimates-graph-male"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 121 215"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="silhouette-male-2-fill"
          x1="50.5"
          y1="1"
          x2="50.5"
          y2="215"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop
            id="silhouette-male-2-fill-0"
            offset="0%"
            stop-color={shadowMan}
          ></stop>
          <stop
            id="silhouette-male-2-fill-1"
            offset="100%"
            stop-color={shadowManSecond}
          ></stop>
        </linearGradient>
      </defs>
      <g id="silhouette-male-green">
        <path
          id="silhouette-male-2"
          d="M100.474,102.994c.023-.103.038-.21.042-.323.03-1.036-.234-2.229-.223-3.5008.091-11.0936.014-17.0879-2.0182-21.7143-.0473-.2999-.0917-.5618-.0965-.7644C97.6154,52.8538,84.5665,38.4403,72.034,36.048c-.0629-.0187-.1317-.0408-.1966-.06-.217-.0659-.4418-.1357-.6725-.2099-.0112-.0034-.0234-.0074-.0346-.0113-.2239-.0718-.4536-.1475-.6872-.2271-.0152-.0049-.0303-.0103-.0449-.0152-.2336-.0797-.4707-.1622-.7106-.2483-.0151-.0054-.0303-.0108-.0454-.0162-.2438-.0875-.4906-.1779-.7389-.2718-.0092-.0029-.018-.0064-.0268-.0098-.2565-.0969-.5155-.1962-.7745-.2989-.0005-.0005-.001-.0005-.0015-.0005-.7915-.3136-1.5865-.6518-2.3439-1.0042v.0005c-1.7997-.8376-3.3839-1.7523-4.1862-2.6012-1.2032-1.2731-1.9045-2.5472-2.3342-3.7259.5092-.7201.8623-1.4427,1.0667-2.0822.3814-1.1969.8954-2.3151,1.1344-3.6698.5262-.7831.9369-1.6202,1.2593-2.472.4146-1.0951-.0761-1.5641.5258-2.6012.4482-.7718.6872-1.63.5457-2.4459-.1429-.8234.3395-1.4737.4229-2.2316.0843-.7683-.3214-1.5007-.4702-2.23802-.1595-.78401.0917-1.48053-.2063-2.24389-.2253-.57756-.914-1.03224-1.272-1.52722-.4453-.61787-.5891-1.12022-1.0905-1.71646-.5531-.65572-1.2681-.76435-2.0192-1.14726-1.0457-.53283-1.4758-1.08434-2.6415-1.31094-1.9972-.3893-3.8193-.703393-5.9224-.65719h-.137c-2.104-.046203-3.9252.26789-5.9234.65719-1.1656.2266-1.5953.77811-2.641,1.31094-.7511.38291-1.4661.49154-2.0196,1.14726-.5014.59624-.6453,1.09859-1.0906,1.71646-.357.49498-1.0461.94966-1.271,1.52722-.2989.76336-.0478,1.45988-.2063,2.24389-.1497.73732-.555,1.46972-.4711,2.23802.0844.7579.5662,1.4082.4228,2.2316-.1409.8159.0981,1.6741.5458,2.4459.6023,1.0371.1117,1.5061.5262,2.6012.3219.8518.7331,1.6894,1.2593,2.472.239,1.3547.7531,2.4729,1.135,3.6698.2038.6395.5569,1.3616,1.0656,2.0817-.4296,1.1787-1.1305,2.4528-2.3342,3.7264-.8023.8489-2.3859,1.7636-4.1856,2.6007-1.0086.4694-2.0845.9133-3.1297,1.307-.0029.0015-.0059.0025-.0088.0035-.2546.0958-.5077.1887-.7569.2782-.0098.0034-.0191.0069-.0288.0103-.2453.088-.4868.172-.7243.2531-.0117.0035-.0224.0074-.0341.0113-.237.0807-.4697.1573-.696.2306-.0093.0029-.0185.0059-.0278.0088-.2321.0742-.458.1445-.676.2104-.0644.0197-.1326.0413-.1955.06C16.4344,38.4403,3.38492,52.8538,2.82209,76.6915c-.00439.2026-.04877.4641-.09706.7639-2.031841,4.6269-2.1089,10.6212-2.017697,21.7148.01073,1.2718-.253127,2.4648-.222888,3.5008.003414.113.018534.22.040969.323-1.011532,2.942-.420903,6.185.576486,8.906c2.43129,6.634,7.23484,9.632,8.25515,8.647c1.01935-.986-.45894-2.278-1.55826-4.615-1.73775-3.699-.36189-5.679-.48089-7.259.76669,1.221,1.25197.692,2.50151,4.232.51549,1.468,2.96539,1.796,2.94729,1.665-.1605-1.371-.4892-2.871-.7799-4.425-.7818-4.17-1.9494-5.165-2.79167-6.133.04877-.097.09462-.198.12583-.311c0,.001.04243-1.178.2741-2.103c1.43684-5.7477,6.42134-11.4648,6.46524-19.9124.0102-2.0134-.0746-3.604-.237-4.8702c1.7036-2.3633,3.7139-5.7805,5.6673-9.4523v.0005c.0131.083.018.1784.0185.2787v.0054c.0005.0383-.0024.0816-.0039.1224c0,.0029-.0005.0059-.0005.0088-.0024.0664-.0068.1342-.0137.207l-.0014.0137c-.0049.0502-.0122.1032-.0185.1568c0,.0015-.0005.003-.0005.004-.0117.0835-.0244.17-.0405.2605-.0005.0044-.0015.0088-.0025.0132-.0092.0517-.0185.1047-.0297.1588-.001.0064-.0024.0123-.0034.0182-.0186.0939-.0395.1912-.0624.292-.001.0069-.003.0137-.0044.0211-.0142.0605-.0278.1214-.043.1843-.0004.0025-.0009.005-.0019.0074-.0307.1273-.0639.2591-.1.3957-.0005.002-.001.0034-.0015.0049-.0112.0408-.0209.0801-.0326.1219-.0005.003-.0015.0069-.0025.0103-.0302.1111-.0639.2291-.0975.3466-.0303.1066-.0595.2104-.0927.3219-.0029.0108-.0068.0231-.0102.034-.0532.1808-.1093.3666-.1678.5598l-.0034.0108c-.0859.2802-.179.5776-.2761.8833C18.8954,76.87,15.934,85.4036,15.7008,95.636c-.0005.0069-.0009.0133-.0009.0202v.0019c0,.0069,0,.0148-.0005.0222-.0308.6414-.0478,1.2971-.0566,1.9607-.0015.1352-.001.2733-.0015.409-.0029.4674-.0019.9388.0049,1.4151.0034.2566.0088.5147.0156.7739.0083.345.0205.692.0342,1.042.0126.334.0253.666.0424,1.004.0088.178.0214.357.0317.536.1892,3.321.5721,6.779,1.0905,10.215.003.001.0064.002.0098.003c1.8036,11.903,5.1596,23.463,7.1583,27.647c2.3498,4.918,4.5358,7.439,5.441,13.523.5487,3.685-.3546,8.58-.2697,14.4.1268,8.792,5.3195,22.447,8.496,31.301.2776.771-1.4914,4.055-1.686,5.565-.3502,2.717-2.0055,4.256-2.3211,5.851-.4818,2.445,5.762,3.203,7.4514,3.322c1.39.098,7.6933,1.409,7.7782-1.752.0307-1.102-1.1603-4.013-1.4441-7.097-.2902-3.174-.4965-4.859-.5848-6.429-.3839-6.703,2.2976-18.304,2.7137-28.311.3238-7.777-1.1447-11.382-1.4149-15.487-.2219-3.376,1.1417-4.955.2053-12.267-.2004-1.566,1.8285-14.722,2.0806-27.985h.001c.0161-.85.0336-.85.0497,0h.001c.2522,13.263,2.2816,26.419,2.0806,27.985-.9359,7.312.4268,8.891.2054,12.267-.2702,4.105-1.7392,7.71-1.4154,15.487.4165,10.007,3.0985,21.608,2.7142,28.311-.0888,1.57-.2951,3.255-.5853,6.429-.2834,3.084-1.4744,5.995-1.4437,7.097.0844,3.161,6.3882,1.85,7.7787,1.752c1.6885-.119,7.9328-.877,7.4504-3.322-.3151-1.595-1.9709-3.134-2.3206-5.851-.1946-1.51-1.963-4.794-1.6865-5.565c3.177-8.854,8.3698-22.509,8.4966-31.301.0844-5.82-.8184-10.715-.2697-14.4.9052-6.084,3.0911-8.605,5.4415-13.523c1.9982-4.184,5.3537-15.744,7.1573-27.647.0034-.001.0073-.002.0107-.003.5204-3.449.9037-6.921,1.0925-10.253.0097-.165.021-.33.0293-.493.0175-.341.0297-.678.0424-1.015.0141-.348.0253-.693.0346-1.036.0059-.2582.0117-.5153.0151-.7714.0074-.4837.0083-.961.0054-1.4353-.001-.1273,0-.2571-.002-.3839-.0087-.669-.0263-1.3296-.057-1.976v-.0143-.0019c0-.0039-.0005-.0079-.0005-.0118-.2322-10.2359-3.1946-18.773-4.7982-23.8393-.0966-.3057-.1902-.6031-.276-.8833-.001-.0029-.002-.0064-.003-.0093-.0663-.2168-.1282-.4237-.1873-.6252-.0263-.088-.0492-.1706-.0736-.2556-.0371-.1303-.0741-.2606-.1073-.383-.001-.0034-.002-.0073-.0029-.0103-.0117-.0418-.0215-.0811-.0327-.1219c0-.0005-.0005-.001-.0005-.0015-.0366-.1386-.0697-.2708-.101-.3991-.0009-.0024-.0014-.0049-.0019-.0074-.0146-.0614-.0283-.1209-.0419-.1799-.0259-.1125-.0488-.2202-.0693-.3244-.0005-.0034-.0015-.0074-.002-.0113-.0107-.0541-.0209-.1071-.0297-.1588c0-.0009-.0005-.0024-.0005-.0034-.0171-.0944-.0302-.1833-.0419-.2703c0-.001-.0005-.0025-.0005-.004-.0069-.0536-.0147-.1066-.0186-.1568-.0005-.0039-.0009-.0078-.0014-.0118-.0073-.0737-.0117-.143-.0142-.2104-.0005-.0019-.0005-.0049-.0005-.0073-.0019-.0408-.0043-.0841-.0039-.1224v-.0005c.0005-.1027.0049-.1991.0191-.2836v-.0005c1.9533,3.6723,3.9637,7.0895,5.6673,9.4528-.1629,1.2662-.2478,2.8568-.2375,4.8697.0438,8.4476,5.0279,14.1647,6.4652,19.9124.2316.925.2746,2.104.2746,2.103.0307.113.076.214.1258.31-.8428.969-2.0104,1.964-2.7922,6.134-.2907,1.554-.6199,3.054-.7804,4.425-.018.131,2.4328-.197,2.9478-1.665c1.2501-3.54,1.7344-3.011,2.5015-4.232-.1194,1.58,1.2569,3.56-.4813,7.259-1.0989,2.337-2.5767,3.629-1.5573,4.615c1.0193.985,5.8229-2.013,8.2546-8.647.9976-2.721,1.5876-5.964.5756-8.906Z"
          clip-rule="evenodd"
          fill="url(#silhouette-male-2-fill)"
          fill-rule="evenodd"
        ></path>
        <g
          id="silhouette-male-1_to"
          transform="translate(50.499935,107.500023)"
        >
          <path
            id="silhouette-male-1"
            d="M120.386,100.689c1.165-12.4078.588-19.3356-1.017-23.895-.15-5.276-.847-12.1183-1.796-16.3237-1.228-5.4419-3.314-9.3367-3.517-13.9163-.313-7.0311-2.641-11.4216-10.941-12.2641-.297-.0656-.589-.1145-.877-.1565-.048-.0069-.097-.0143-.144-.0207-2.9781-.405-5.5862.157-8.5139-2.8849-1.0997-1.1432-1.6165-2.6227-1.8813-4.3299-.0371-.238-.0679-.4819-.0962-.7288-.0059-.0504-.0113-.1013-.0166-.1521-.003-.0292-.0049-.0588-.0078-.0879.6389-.7383,1.2183-1.4499,1.467-1.8528.3385-.5492.5622-1.2168.7215-1.961.0318-.042.063-.082.0953-.1249.8231-1.0914,1.3913-2.359,1.7962-3.6573.3469-1.1076-.063-1.5817.4397-2.631.3742-.7808.574-1.6489.4558-2.4741-.1192-.8326.2833-1.4903.3532-2.2572.0708-.7768.2008-1.51803.0757-2.26419-.1324-.79308.0772-1.49727-.1724-2.26911-.1881-.58418-.7631-1.04492-1.0611-1.54466-.3723-.62518-.4924-1.13381-.9111-1.73628-.4621-.66369-1.0591-.77332-1.6863-1.16047-.873-.53925-1.2321-1.09727-2.2052-1.326403-1.6683-.393574-3.19-.711594-4.9467-.665175-1.7562-.046419-3.2779.271601-4.9462.665175-.9731.229133-1.3322.787153-2.2052,1.326403-.6272.38715-1.2247.49678-1.6863,1.16047-.4187.60247-.5384,1.1111-.9111,1.73628-.298.49974-.873.96048-1.0616,1.54466-.2486.77184-.0395,1.47603-.1719,2.26911-.1251.74616.0054,1.48739.0757,2.26419.0699.7669.4724,1.4246.3527,2.2572-.1172.8252.0821,1.6933.4563,2.4741.5027,1.0493.0928,1.5234.4397,2.631.4049,1.2983.9731,2.5659,1.7962,3.6573.0323.0424.063.0829.0953.1249.1597.7442.383,1.4113.7215,1.961.2487.4029.8281,1.1145,1.467,1.8528-.0024.0296-.0049.0602-.0083.0898-.0049.0499-.0102.0998-.0161.1492-.0283.2469-.0591.4913-.0962.7298-.2648,1.7072-.7812,3.1867-1.8818,4.3299-2.9267,3.0419-5.5354,2.4799-8.5133,2.8849-.0474.0064-.0953.0138-.1432.0207-.2892.042-.5808.0904-.8778.1565-8.3004.8425-10.6282,5.233-10.9408,12.2641-.2037,4.5796-2.2892,8.4744-3.5168,13.9163-.9487,4.2054-1.6463,11.0477-1.7963,16.3237-1.6048,4.5594-2.1822,11.4872-1.0171,23.895.1192,1.272.3424,2.974.4616,4.008-.6409,2.762-1.2315,7.647-.1836,10.388c2.5349,6.628,7.3907,9.567,8.397,8.561s-.4934-2.281-1.6287-4.612c-1.7957-3.688-1.2393-5.23-1.383-6.815.787,1.214,1.2638.675,2.5687,4.212.5378,1.467,1.7933,1.04,1.7728.908-.1813-1.374-.5325-2.878-.8476-4.434-1.1719-5.792-3.2344-6.241-3.9379-8.208c0,0,.2516-1.672.403-2.617.9419-5.8784,2.9028-13.8634,3.1304-22.9571.0113-2.6701,4.1607-11.6097,6.4709-25.3409.193.9249.4089,1.9397.6487,3.0182.002.0079.0039.0158.0059.0237.1216.5457.2496,1.1087.3835,1.682.0093.04.0186.079.0278.1185.1334.5699.2726,1.1506.4182,1.7397.0112.045.0225.0894.0332.1338.1471.5936.3,1.1941.4597,1.7985.0088.0346.0181.0692.0269.1033.1646.6227.3351,1.2488.5124,1.8755c2.023,7.1436,1.5262,15.0911,1.6243,19.3153.0841,3.6389-.4997,3.6863-1.1113,5.6754-.0826.2682-.1676.5279-.255.7817-.0044.0124-.0088.0242-.0127.0361-.0836.2415-.1691.4775-.2555.7091-.0078.0208-.0157.0415-.0235.0622-.0835.2223-.168.4415-.254.6578-.0117.0301-.0235.0602-.0352.0899-.0811.2034-.1627.4059-.2442.6079-.0631.154-.1256.3081-.1886.4622l-.0176.0439c-.0547.1339-.1089.2677-.1631.402-.0118.0296-.024.0598-.0357.0894-.0445.1111-.0894.2232-.1339.3358-.0171.0424-.0337.0854-.0508.1284-.0034.0084-.0068.0173-.0102.0257-.0425.1096-.0855.2197-.128.3308-.0122.0311-.024.0622-.0357.0938-.0356.0924-.0708.1867-.1055.281-.0039.0109-.0083.0218-.0122.0326-.0147.0405-.0298.081-.045.122-.0136.038-.0273.0765-.041.115-.042.1171-.084.2356-.1255.3551-.0147.043-.0294.0854-.0445.1289-.0024.0084-.0054.0168-.0083.0247-.002.0054-.0039.0104-.0054.0158-.0483.1422-.0957.2864-.1426.4331-.0049.0148-.0093.0296-.0137.0444-.0464.1462-.0918.2958-.1368.4469-.0142.0474-.0278.0948-.042.1427-.0401.1388-.0796.2795-.1182.4232-.0093.0346-.0191.0687-.0283.1032-.0465.1749-.0914.3541-.1354.5363-.0107.044-.021.0889-.0312.1329-.0342.1471-.0679.2973-.1012.4498-.0112.0529-.0229.1052-.0337.1591-.041.1965-.0811.3965-.1192.6029-.0014.0074-.0024.0153-.0039.0227-.0361.1985-.0708.403-.104.6114-.0093.0587-.0186.118-.0274.1782-.0278.1788-.0542.3615-.0791.5485-.0064.047-.0132.094-.0196.141-.0298.231-.0576.467-.084.709-.0054.054-.0107.11-.0161.164-.0205.198-.0396.4-.0572.607-.0058.07-.0122.141-.018.212-.0206.261-.0401.528-.0567.804-.0445.508-.0835,1.006-.1197,1.5-.0107.147-.02.292-.0303.437-.0249.366-.0479.728-.0684,1.087-.0078.136-.0156.271-.0229.406-.0518.982-.087,1.939-.106,2.876-.0015.06-.002.12-.0035.18-.0078.431-.0117.857-.0131,1.28-.0005.054-.0005.109-.0005.163-.0118,9.476,1.5911,17.151,3.4508,28.936.7509,4.76,2.4016,11.9,2.0064,15.624-.3928,3.722-.7313,7.275-.5218,13.447.2931,8.606,3.595,16.415,3.7435,31.278.0078.825-1.4943,4.075-1.6893,5.591-.3502,2.729-2.4777,4.275-2.7933,5.879-.4831,2.456,5.7708,3.217,7.4631,3.337c1.3922.098,4.9139,1.313,4.9989-1.863.0313-1.108-1.1621-4.031-1.446-7.13-.2906-3.189-.4973-4.882-.5862-6.459-.3845-6.734,2.4025-18.326,2.8197-28.379.3244-7.813-1.147-11.435-1.4177-15.559-.2217-3.392,1.1046-5.816.8686-11.582-.0698-1.689-.3932-3.494-.104-5.309c1.3038-8.183,1.7635-18.614,1.7176-26.486.363.152.7347.26,1.1177.308v0c.0044.001.0083,0,.0132.001.15.018.3014.029.4553.028.1539.001.3058-.01.4558-.028.0049-.001.0088,0,.0132-.001v0c.3835-.048.7547-.156,1.1177-.308-.0454,7.872.4138,18.303,1.7181,26.486.2887,1.815-.0347,3.62-.104,5.309-.2365,5.766,1.0903,8.19.868,11.582-.2706,4.124-1.742,7.746-1.4176,15.559.4172,10.053,3.2041,21.645,2.8197,28.379-.0889,1.577-.2951,3.27-.5862,6.459-.2839,3.099-1.4773,6.022-1.446,7.13.0845,3.176,3.6067,1.961,4.9989,1.863c1.6923-.12,7.9466-.881,7.4626-3.337-.315-1.604-2.4426-3.15-2.7928-5.879-.195-1.516-1.6976-4.766-1.6893-5.591.1485-14.863,3.4501-22.672,3.7431-31.278.21-6.172-.129-9.725-.521-13.447-.395-3.724,1.255-10.864,2.006-15.624c1.574-9.978,2.964-17.009,3.347-24.682v-.003c.07-1.39.106-2.802.104-4.256c0-.05,0-.101,0-.152-.002-.428-.007-.859-.014-1.296-.001-.055-.002-.11-.003-.165-.019-.941-.054-1.903-.107-2.89-.007-.128-.014-.256-.021-.384-.021-.367-.045-.737-.07-1.11-.01-.141-.019-.28-.029-.422-.037-.495-.076-.996-.121-1.505-.016-.275-.035-.541-.056-.801-.006-.074-.012-.147-.019-.22-.017-.203-.036-.402-.056-.596-.005-.057-.011-.116-.017-.172-.026-.24-.053-.474-.083-.702-.007-.054-.015-.107-.022-.161-.024-.1779-.049-.3522-.075-.5236-.01-.0657-.02-.1318-.031-.1965-.031-.1961-.064-.3882-.098-.5758-.003-.0183-.006-.0371-.01-.0548-.037-.2025-.076-.3981-.116-.5911-.013-.0598-.025-.1181-.038-.1773-.031-.1427-.063-.2835-.095-.4217-.012-.0524-.024-.1057-.037-.1576-.042-.1773-.086-.3511-.131-.5205-.013-.0459-.025-.0898-.037-.1348-.036-.1308-.071-.2592-.108-.3861-.017-.0558-.033-.1121-.049-.1674-.04-.1348-.081-.2677-.122-.3986-.01-.0301-.018-.0607-.028-.0903-.046-.1437-.093-.285-.14-.4242v-.0005c-.004-.0104-.007-.0207-.011-.0316-.017-.0509-.035-.1008-.052-.1511-.038-.1101-.077-.2198-.116-.3274-.016-.0455-.032-.0909-.049-.1358-.014-.041-.029-.081-.044-.1215-.002-.004-.003-.0079-.004-.0119-.037-.0982-.073-.196-.11-.2928-.013-.0346-.026-.0686-.039-.1022-.043-.1126-.087-.2242-.13-.3348-.001-.002-.001-.0045-.002-.0064-.001-.001-.001-.002-.002-.003-.016-.0425-.033-.0854-.05-.1274-.052-.1314-.104-.2617-.156-.3911-.003-.0074-.006-.0148-.009-.0222-.125-.3102-.25-.6173-.375-.925-.084-.2064-.167-.4128-.25-.6217-.01-.0242-.02-.0484-.029-.0726-.087-.2212-.174-.4444-.259-.6706-.007-.0173-.013-.0345-.019-.0518-.088-.2351-.175-.4741-.259-.7185-.004-.0094-.007-.0183-.01-.0277-.087-.2548-.173-.5155-.256-.7842-.612-1.9891-1.195-2.0365-1.111-5.6754.098-4.2242-.399-12.1717,1.624-19.3153.178-.6292.349-1.2578.514-1.883.008-.0301.016-.0597.024-.0893.161-.6119.316-1.2188.464-1.8183.009-.0355.017-.0706.027-.1062.149-.6039.291-1.1989.428-1.7822.004-.0158.008-.0316.011-.0479.405-1.7318.754-3.3545,1.048-4.7668c2.31,13.7317,6.46,22.6713,6.471,25.3414.228,9.0937,2.189,17.0787,3.131,22.9571.151.945.403,2.617.403,2.617-.704,1.967-2.767,2.416-3.938,8.208-.315,1.556-.667,3.06-.848,4.434-.02.132,1.235.559,1.773-.908c1.305-3.537,1.782-2.998,2.569-4.212-.144,1.585.412,3.127-1.383,6.815-1.136,2.331-2.635,3.606-1.629,4.612s5.862-1.933,8.397-8.561c1.048-2.741.457-7.626-.183-10.388.119-1.034.341-2.736.461-4.008Z"
            transform="translate(-86.000118,-107.500023)"
            opacity="0"
            clip-rule="evenodd"
            fill={manColor}
            fill-rule="evenodd"
          ></path>
        </g>
      </g>
    </svg>
  );
};
