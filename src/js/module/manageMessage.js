import {getUserInfo} from './userSettings'

export const manageMessage = () => {

  const userModal = document.querySelector('.user-modal')
  const userModalName = document.querySelector('.user-modal-name')
  const closeUserProfile = document.querySelector('.close-user-profile')
  const userModalImg = document.querySelector('.user-modal-img')
  const userModalBio = document.querySelector('.user-modal-bio')

  const openUserProfile = async ({target}) => {
    const userButton = target.closest('[data-user]')

    if (userButton) {
      const uid = userButton.dataset.user
      const {username, userBio, userPhoto} = await getUserInfo({uid})
      userModalName.textContent = username
      userModalImg.src = userPhoto
      userModalBio.textContent = userBio
      userModal.classList.add('show')
    }

  }


  closeUserProfile.addEventListener('click', () => userModal.classList.remove('show'))
  document.querySelector('.messages').addEventListener('click', openUserProfile)
}
