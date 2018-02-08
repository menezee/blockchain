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

const insight = new Insight('testnet')

insight.getUnspentUtxos(address, (err, utxos) => {
    if (err) {
        console.log(err)
    } else {
        const tx = new bitcore.Transaction()
            .from(utxos) // Feed information about what unspent outputs one can use
            .to(address2, 10000) // Add an output with the given amount of satoshis
            .change(address) // Sets up a change address where the rest of the funds will go
            .sign(privateKeyWalletFormat);

        try {
            insight.broadcast(tx, function(err, txID) {
                if (err) {
                    console.log(`error on broadcast`)
                } else {
                    console.log(`successful broadcast: `, txID)
                }
            })
        } catch (e) {
            console.log(`err`)
        }
    }
})
