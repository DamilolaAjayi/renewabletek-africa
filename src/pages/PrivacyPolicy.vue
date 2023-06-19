<template>
    <div>
        <navigation />
        <main>
        <div class="policy-body">
            <h1 class="policy-body__header">Privacy policy</h1>
            <div class="policy-body--about__subtitle">
                    <h3>Last updated <span>Monday, March 27, 2023</span> </h3>
            </div>
            <div class="policy-body--about__paragraph">
                <p>Effective Date: Monday, March 27, 2023</p>
                <p>We at RenewableTEK Africa (“we”, “us”, “our”) are committed to protecting the privacy of our customers (“you”, “your”) and we respect your right to privacy. This Privacy Policy describes how we collect, use, and share your personal information when you use our renewable energy application (“Application”).</p>
            </div>
            <div>
                <h2 class="policy-body--sections__header">Collection of Information</h2>
                <div>
                    <p>We collect various types of personal information from you when you use our Application. The types of personal information we collect include:</p>
                    <p>Biometric Data: We may collect and process biometric data such as fingerprints or facial recognition data in order to verify your identity and to provide access to certain features of the Application.</p>
                    <p>Identity Information: We may collect personal information such as your name, NIN or other national identification information, date of birth, and contact information (including email address and phone number) to identify you as a customer and provide our services to you.</p>
                    <p>Bank Verification Number (BVN) Information: We may collect and process your BVN information to comply with regulatory requirements and to verify your identity and financial information.</p>
                </div>
            </div>
            <div>
                <h2 class="policy-body--sections__header">Use of Information</h2>
                <div>
                    <p>We may use the personal information we collect from you for the following purposes:</p>
                    <p>To verify your identity and to provide access to certain features of the Application;</p>
                    <p>To process and fulfil your orders for our alternative clean power financing services;</p>
                    <p>To communicate with you about our services, including providing customer support and responding to your inquiries;</p>
                    <p>To comply with our legal and regulatory obligations;</p>
                    <p>To improve our services and develop new services;</p>
                    <p>To detect, prevent, and respond to fraud, security breaches, and other potentially illegal or prohibited activities;</p>
                    <p>To personalise and optimise your user experience; and</p>
                    <p>To perform data analysis and research to better understand user behaviour and preferences.</p>
                </div>
            </div>
            <div>
                <h2 class="policy-body--sections__header">Sharing of Information</h2>
                <div>
                    <p>We may share your personal information with third parties in the following circumstances:</p> 
                    <p>Service Providers: We may share your personal information with service providers who assist us with processing payments, providing customer support, and other similar services.</p>
                    <p>Business Partners: We may share your personal information with business partners who assist us with marketing and promoting our services.</p>
                    <p>Legal Obligations: We may disclose your personal information to comply with legal and regulatory requirements, including responding to court orders or other legal requests.</p>
                    <p>Merger or Acquisition: We may transfer your personal information to a third party in the event of a merger, acquisition, or sale of all or a portion of our assets.</p>
                </div>
            </div>
            <div>
                <h2 class="policy-body--sections__header">Data Security</h2>
                <div>
                    <p>We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect your personal information from unauthorised access, use, or disclosure.</p>
                </div>
            </div>
            <div>
                <h2 class="policy-body--sections__header">Your Rights</h2>
                <div>
                    <p>You have certain rights with respect to your personal information, including:</p>
                    <p>The right to access and review your personal information;</p>
                    <p>The right to request that we correct or update your personal information;</p>
                    <p>The right to request that we delete your personal information, subject to certain legal exceptions;</p>
                    <p>The right to object to or restrict our processing of your personal information;</p>
                    <p>The right to request that we provide your personal information to you in a portable format; and</p>
                    <p>The right to lodge a complaint with a supervisory authority.</p>
                </div>
            </div>
            <div>
                <h2 class="policy-body--sections__header">Updates to this Policy</h2>
                <div>
                    <p>We may update this Privacy Policy from time to time, and we will post the updated Privacy Policy on our website. Your continued use of the Application following any such changes indicates your acceptance of the updated Privacy Policy.</p>
                </div>
            </div>
            <div>
                <h2 class="policy-body--sections__header">Contact Us</h2>
                <div>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at contact@renewabletekafrica.com.</p>
                </div>
            </div>
        </div>
        </main>
        <el-footer />
    </div>
</template>

<script>
import Navigation from '@/components/global/navigation/Nav';
import ElFooter from '@/components/ElFooter';

export default {
    name: "privacy-policy",
    components: {
        Navigation,
        ElFooter,
    },
};
</script>

<style scoped>
main {
  min-height: 100vh;
}


@media screen and (max-width: 767px) {
    .policy-body {
        margin: 14rem 2rem 0;
    }
    .policy-body p {
        margin: 1.5rem 0;
        font-size: 1rem;
        font-weight: 400;
    }
}
.policy-body p {
    margin: 2rem 0;
    font-size: 1.5rem;
    font-weight: 400;
}
.policy-body__header {
    line-height: 1.2;
    margin: 2.1em 0 3rem 0;
    font-weight: 800;
    font-size: 3em;
}
.policy-body--about__subtitle {
    margin-bottom: 3.5rem;
}
.policy-body--about__subtitle h3 {
    font-weight: 800;
    font-size: 1.5rem;
}
.policy-body--about__subtitle span {
    font-size: 1.5rem;
    color: #667085;
    margin-left: 1.5rem;
    font-weight: 400;
}

@media screen and (max-width: 767px) {
    .policy-body__header {
        font-size: 1.4rem;
    }
}

.policy-body--about__paragraph {
    font-size: 1.5rem;
    font-weight: 400;
}
@media screen and (max-width: 767px) {
    .policy-body--about__paragraph {
        font-size: 1.2rem;
    }
}
.policy-body--sections__header {
    line-height: 1.2;
    font-weight: 600;
    font-size: 2rem;
}
@media screen and (max-width: 767px) {
    .policy-body--sections__header {
        font-size: 1.4rem;
        font-weight: 700;
    }
}

@media screen and (min-width: 768px) {
 .policy-body {
    font-weight: 300;
    margin: 14rem 13% 12rem;
    width: 70%;
  } 
}
</style>