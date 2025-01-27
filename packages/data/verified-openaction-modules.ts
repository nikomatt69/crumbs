import { IS_MAINNET } from './constants';

export const VerifiedOpenActionModules = {
  Swap: IS_MAINNET
    ? '0x3394E78a3389b1f0216F30fA0613f4975D0573C3'
    : '0x3394E78a3389b1f0216F30fA0613f4975D0573C3',
  Poll: IS_MAINNET
    ? '0x3d06AA6ca4FC7eE0D5581B85CB52CA7714175e43'
    : '0xc91C3d3eD7089a9b52945c8967CF0854f08E9e7a',
  DecentNFT: IS_MAINNET
    ? '0x028f6aeE3CF9e1cA725f4C47d9460801b6c7508A'
    : '0x028f6aeE3CF9e1cA725f4C47d9460801b6c7508A',
  Tip: IS_MAINNET
    ? '0x22cb67432C101a9b6fE0F9ab542c8ADD5DD48153'
    : '0x6111e258a6d00d805DcF1249900895c7aA0cD186',
  Polymarket: IS_MAINNET
    ? '0x0D4936c94188666386B49C19489081029bc2b5Ae'
    : '0x0D4936c94188666386B49C19489081029bc2b5Ae',
  RentableBillboard: IS_MAINNET
    ? '0x6487b9c720203ce95332cd06dcc18a78102a31d1'
    : '0x6487b9c720203ce95332cd06dcc18a78102a31d1',
};
