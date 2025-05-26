import { Link } from 'react-router-dom'
import Header from '../components/ui/Header'
import LoadingLayout from '@/components/ui/LoadingLayout'
import { useGetMe } from '@/hooks/auth/useGetMe'

export default function About() {
    const { isLoading, user, isLoggedIn } = useGetMe()

    if (isLoading) return <LoadingLayout isPage={true} />

    return (
        <>
            <Header isLoggedIn={isLoggedIn} user={user} />
            <span
                data-aos="fade-down-right"
                className="bg-secondary/70 absolute top-20 right-80 h-72 w-72 rounded-full blur-[100px]"
            ></span>
            <span
                data-aos="fade-up-left"
                className="bg-primary absolute bottom-20 left-60 h-72 w-72 rounded-full blur-[200px]"
            ></span>
            <div className="hero min-h-screen">
                <div className="hero-content w-full text-center md:w-1/2">
                    <div className="w-full">
                        <h1
                            data-aos="zoom-out-up"
                            className="text-7xl font-bold"
                        >
                            سلام، به <span className="text-primary">دویت</span>{' '}
                            خوش اومدی
                        </h1>
                        <p
                            data-aos="zoom-out-up"
                            data-aos-offset="0"
                            data-aos-delay="300"
                            className="py-6 text-xl"
                        >
                            اینجا چه خبره و قراره چه اتفاقی بیوفته؟!
                            <br />
                            با ما همراه باش تا از همه اتفاقات اینجا با خبر بشی‌
                            (:
                        </p>
                    </div>
                </div>
            </div>
            <div className="mb-20 flex w-full flex-col items-center justify-center gap-3">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            data-aos="fade-right"
                            src="/images/coding.webp"
                            className="max-w-sm"
                        />
                        <div data-aos="fade-left">
                            <h1 className="text-5xl font-bold">
                                دنیای کد ها و ارور ها !
                            </h1>
                            <p className="py-6">
                                اینجا میتونی از تجربه همکارات استفاده کنی،
                                تیم‌سازی کنی،‌ موقعیت های شغلی پیدا کنی و در
                                مورد آخرین تکنولوژی ها اطلاعات کسب کنی.
                                <br />
                                رایگان ی حساب بساز و به جمع دویت محلق شو.
                                <br />
                                اینجا قراره کلی اتفاق خفن و خوب بیوفته. با ما
                                همراه شو...
                            </p>
                            <Link to="/sign-up" className="btn btn-primary">
                                ثبت نام کن
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-52 flex w-full flex-col items-center justify-center gap-3">
                <div data-aos="fade-up" className="w-2/5">
                    <div className="collapse-plus bg-base-200/50 border-base-300 collapse border backdrop-blur-lg">
                        <input
                            type="radio"
                            name="my-accordion-3"
                            defaultChecked
                        />
                        <div className="collapse-title font-semibold">
                            کاربرد این کامیونیتی چیست؟
                        </div>
                        <div className="collapse-content text-sm">
                            شما میتونین با هر تخصص و تجربه ای وارد این شبکه بشید
                            و ارتباطات خودتون رو گسترش بدین
                        </div>
                    </div>
                    <div className="collapse-plus bg-base-200/50 border-base-300 collapse border backdrop-blur-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">
                            استفاده از دویت هزینه ای داره؟
                        </div>
                        <div className="collapse-content text-sm">
                            نه (:
                            <br />
                            شما به رایگان میتونی از دویت استفاده کنید و با ما
                            همراه باشید
                        </div>
                    </div>
                    <div className="collapse-plus bg-base-200/50 border-base-300 collapse border backdrop-blur-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">
                            اگر از دویت استفاده نکنم چی رو از دست میدم؟
                        </div>
                        <div className="collapse-content text-sm">
                            یک شبکه بزرگ از برنامه نویس ها که میتونن تو رو
                            برنامه‌نویس بهتری کنن و پیدا کردن موقعیت های شغلی یا
                            تیمی که در دویت وجود داره.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
