import bitcore from 'bitcore-lib'
import { Insight } from 'bitcore-explorers'

// const privateKey = bitcore.PrivateKey('testnet')
// const privateKeyWIF = privateKey.toWIF()

// privateKeyWIF: cSmab1zyFuo3cmLBA7ya8gM1SCVkoKuXVEu3MoUJchHadYJseu2F
// privateKeyWIF2: cNt91Lq76X2m9j1j8KAXNtLNRYrjW68bfRhHJvFYrLotQe89gmkQ

// address: moXcARGqFGbVh67UM3S7aHDneeSTjjMyTN
// address2: mw7EFyjKLiBjjRpLg561REAkUn4zKo8uDa

const privateKeyWalletFormat = bitcore.PrivateKey.fromWIF('cSmab1zyFuo3cmLBA7ya8gM1SCVkoKuXVEu3MoUJchHadYJseu2F')
const address = privateKeyWalletFormat.toAddress()

const privateKeyWalletFormat2 = bitcore.PrivateKey.fromWIF('cNt91Lq76X2m9j1j8KAXNtLNRYrjW68bfRhHJvFYrLotQe89gmkQ')
const address2 = privateKeyWalletFormat2.toAddress()

console.log(`address`, address)
console.log(`address2`, address2)

let insight = new Insight('testnet')


insight.getUnspentUtxos(address, (err, utxos) => {
    if (err){
        console.log(err)
    } else {
        // const tx = bitcore.Transaction()
        // tx.from(utxos)
        // tx.to(address2, 10000)
        // tx.serialize()
        console.log(`utxos`, utxos)
    }
})
