import CustomFileInput from '@/components/ui/CustomFileInput'
import LoadingLayout from '@/components/ui/LoadingLayout'
import { useEffect, useState } from 'react'
import 'jalaali-react-date-picker/lib/styles/index.css'
import { InputDatePicker } from 'jalaali-react-date-picker'
import { Moment } from 'moment'
import { useUpdateUser } from '@/hooks/users/useUpdateUser'
import LoadingButton from '@/components/ui/LoadingButton'
import moment from 'jalali-moment'
import { useGetMe } from '@/hooks/auth/useGetMe'

export default function Profile() {
    const { user, isLoading } = useGetMe()
    const { error, isUpdatingUser, updateUser } = useUpdateUser()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bio, setBio] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [birthday, setBirthday] = useState<any>(null)
    const [avatar, setAvatar] = useState('')
    const [avatarFile, setAvatarFile] = useState<File | null>(null)

    const updateUserHandler = () => {
        const formData = new FormData()

        if (username) formData.append('username', username)
        if (password) formData.append('password', password)
        if (firstName) formData.append('first_name', firstName)
        if (lastName) formData.append('last_name', lastName)
        if (bio) formData.append('bio', bio)
        if (gender) formData.append('gender', gender)
        if (birthday) formData.append('birthday', birthday.format('YYYY-MM-DD'))
        if (avatarFile) formData.append('avatar', avatarFile)

        updateUser({ user: formData })
    }

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name || '')
            setLastName(user.last_name || '')
            setBio(user.bio || '')
            setGender(user.gender || '')
            setUsername(user.username || '')
            setAvatar(user.avatar || avatar)

            setBirthday(
                user.birthday ? moment(user.birthday, 'YYYY-MM-DD') : null
            )
        }
    }, [user])

    if (isLoading) return <LoadingLayout />

    return (
        <div className="w-full p-4" dir="rtl">
            <div className="mb-4 flex flex-wrap items-center gap-4">
                <fieldset className="fieldset flex w-full items-center gap-2">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img
                                src={
                                    avatar
                                        ? `http://localhost:8000${avatar}`
                                        : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                                }
                            />
                        </div>
                    </div>
                    <legend className="fieldset-legend">تصویر پروفایل</legend>
                    <label>
                        <CustomFileInput
                            onFileSelect={(file) => setAvatarFile(file)}
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">نام کاربری</legend>
                    <label className="w-1/4">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input bg-base-200 input-sm w-10/12"
                            placeholder="نام کاربری"
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset w-1/4">
                    <legend className="fieldset-legend">نام</legend>
                    <label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="input bg-base-200 input-sm w-10/12"
                            placeholder="نام"
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset w-1/4">
                    <legend className="fieldset-legend">نام خانوادگی</legend>
                    <label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="input bg-base-200 input-sm w-10/12"
                            placeholder="نام خانوادگی"
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">تاریخ تولد</legend>
                    <span className="w-1/4">
                        <InputDatePicker
                            value={birthday}
                            onChange={(
                                date: Moment | null,
                                dateString: string
                            ) => {
                                setBirthday(date)
                            }}
                            className="!bg-base-100 !text-base-content"
                        />
                    </span>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">رمز عبور</legend>
                    <label className="w-1/4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input bg-base-200 input-sm w-10/12"
                            placeholder="رمز عبور"
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">جنسیت</legend>
                    <label className="w-fit cursor-pointer">
                        <span className="mx-2">مرد</span>
                        <input
                            onChange={(e) => setGender(e.target.value)}
                            type="radio"
                            name="gender"
                            value="M"
                            checked={gender === 'M'}
                            className="radio radio-lg radio-primary bg-base-200"
                        />
                    </label>
                    <label className="w-fit cursor-pointer">
                        <span className="mx-2">زن</span>
                        <input
                            type="radio"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === 'F'}
                            name="gender"
                            value="F"
                            className="radio radio-lg radio-primary bg-base-200"
                        />
                    </label>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">بیوگرافی</legend>
                    <textarea
                        className="textarea bg-base-200 h-24 w-1/2"
                        placeholder="بیوگرافی"
                        onChange={(e) => setBio(e.target.value)}
                        defaultValue={bio}
                    ></textarea>
                </fieldset>
                <span className="w-1/5">
                    <LoadingButton
                        onClickHandler={updateUserHandler}
                        isLoading={isUpdatingUser}
                        label="ذخیره"
                    />
                </span>
            </div>
            <div></div>
        </div>
    )
}
