import {
    getHellfireClubeSubscription,
    subscribeToHellfireClub
} from './firebase/hellfire-club.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionList = document.getElementById('subscriptions')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //Salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log(subscriptionId)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
})

async function loadData() {
    const subscription = await getHellfireClubeSubscription();

    /*subscriptionList.innerHTML = subscription.map(sub => `
        <li>
            ${sub.name}
        </li>
    `).join('')*/
    console.log(subscription)
}

loadData();